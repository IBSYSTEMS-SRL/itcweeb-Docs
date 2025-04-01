# Documentación del Programa APIWEB (apiweb.rpgle)

## Descripción General
Este programa actúa como un middleware web que maneja solicitudes HTTP para una API REST en un sistema IBM i. Procesa solicitudes entrantes, maneja la autenticación mediante API Key y redirige las peticiones a los programas correspondientes.

## Especificaciones Técnicas
- **Tipo de Programa**: RPG ILE Free Format
- **Grupo de Activación**: *CALLER
- **Biblioteca de Enlaces**: IBSBMC/WEB, QC2LE

## Dependencias
- Programa HELP_PGMW
- Programa QDCXLATE (IBM i traducción de caracteres)
- APIs del sistema QtmhWrStout y QtmhRdStin

## Estructuras de Datos
1. **ErrDS**
   - BytesProv: contador de bytes proporcionados
   - BytesAvail: contador de bytes disponibles

2. **QUSEC** (Estructura de código de error)
   - QUSBPRV: bytes proporcionados
   - QUSBAVL: bytes disponibles
   - QUSEI: información de error
   - QUSERVED: reservado
   - QUSED01: datos adicionales

## Variables Principales
- `Data`: Buffer principal para datos (15MB)
- `apiKey`: Almacena la clave de API de la solicitud
- `URL`: Almacena la URI de la solicitud
- `ReqMethod`: Método de la solicitud HTTP
- `ContentType`: Tipo de contenido de la solicitud
- `pgmname`: Nombre del programa a ejecutar

## Funcionalidad Principal

### 1. Manejo de Cabeceras HTTP
- Establece cabeceras de respuesta HTTP
- Configura protección XSS

### 2. Autenticación
- Verifica la presencia de API Key en la cabecera HTTP_AUTHORIZATION
- Valida la API Key antes de procesar la solicitud

### 3. Procesamiento de Solicitudes
1. Extrae la URI y método de la solicitud
2. Identifica el programa a ejecutar desde la URL
3. Maneja dos tipos de rutas:
   - `/rest/`: Llama al programa especificado
   - `/rest/help/`: Llama al programa HELP_PGMW para documentación

### 4. Conversión de Datos
- Convierte datos entre ASCII y EBCDIC según sea necesario
- Utiliza QDCXLATE para la traducción de caracteres

## Manejo de Errores
- Utiliza bloques MONITOR para control de errores
- Retorna respuestas JSON con estados de error
- Maneja errores de:
  - API Key faltante o inválida
  - URI inválida
  - Errores en la ejecución de programas

## Formato de Respuesta
```json
{
    "success": boolean,
    "message": "mensaje de estado"
}
```

## Consideraciones de Seguridad
1. Implementa validación de API Key
2. Incluye cabecera X-XSS-Protection
3. Valida entrada de datos antes del procesamiento

## Limitaciones
- Tamaño máximo de buffer: 15MB
- Requiere configuración previa de API Key
- Debe ejecutarse en un entorno IBM i con soporte para CGI

## Notas de Mantenimiento
- El programa debe residir en una biblioteca accesible
- Requiere permisos adecuados para ejecutar programas del sistema
- Los programas llamados deben estar compilados y disponibles en la biblioteca

# APIWEB - RPG Web API Handler

## Description
APIWEB is an RPG program designed to act as a bridge between web requests and RPG programs. It processes incoming HTTP requests, extracts the target program name from the URL, handles request payloads, and returns appropriate responses with proper HTTP headers. This program essentially functions as a middleware allowing traditional RPG programs to be exposed as web APIs.

## Control Options
```rpgle
Ctl-Opt DftActGrp(*no) ActGrp(*caller) BndDir('IBSBMC/WEB':'QC2LE');
```
- `DftActGrp(*no)` - Does not use the default activation group
- `ActGrp(*caller)` - Uses the caller's activation group
- `BndDir('IBSBMC/WEB':'QC2LE')` - Binds to the specified binding directories

## Procedure Interfaces (PR) and Parameters

### WriteToWeb
```rpgle
Dcl-PR WriteToWeb ExtProc('QtmhWrStout');
    DataVar     char(15000000) options(*varsize);
    DataVarLen  Int(10)     Const;
    ErrCode     Char(8000)  Options(*varsize);
End-PR;
```
Writes output to the web client through standard output.

### getenv
```rpgle
Dcl-PR getenv pointer extproc('getenv');
   *N  pointer value options(*string);
End-PR;
```
Retrieves environment variables from the HTTP request.

### ReadStdInput
```rpgle
Dcl-PR ReadStdInput  ExtProc('QtmhRdStin');
    szRtnBuffer     Char(15000000) options(*varsize);
    nBufLen         int(10)   const;
    nRtnLen         int(10);
    QUSEC           Like(QUSEC);
End-PR;
```
Reads the standard input (HTTP request body).

### Translate
```rpgle
Dcl-PR Translate  ExtPgm('QDCXLATE');
       *N   Packed(5:0)     const;
       *N   Char(15000000)     Options(*varsize);
       *N   Char(10)        const;
End-PR;
```
Translates character data between EBCDIC and ASCII.

### PROGRAM
```rpgle
Dcl-PR PROGRAM   extPgm (pgmname);
     *N CHAR(7600);
End-PR;
```
Dynamic call to the target program specified in the URL.

### HELP_PGMW
```rpgle
Dcl-PR HELP_PGMW extPgm('HELP_PGMW');
     *N CHAR(7600);
End-PR;
```
Call to a help program for documentation purposes.

## Data Structures (DS)

### ErrDS
```rpgle
Dcl-DS  ErrDS   Qualified;
    BytesProv   int(10) inz(0);
    BytesAvail  int(10) inz(0);
End-DS;
```
Error data structure for API calls.

### QUSEC
```rpgle
Dcl-DS QUSEC qualified;
      QUSBPRV     int(10);
      QUSBAVL     int(10);
      QUSEI       char(50);
      QUSERVED    char(50);
      QUSED01     char(50);
End-DS;
```
Standard IBM i API error code structure.

## Variables and Constants

### Main Variables
- `Data` - Main character buffer for HTTP response (Char 15000000)
- `RtnBuffer` - Buffer for incoming request data (Char 15000000)
- `EBCData` - EBCDIC version of request data (Char 15000000)
- `pgmname` - Name of program to execute (Char 10)
- `apiKey` - API key from authorization header (Char 20)
- `URL` - Request URL (Char 100)
- `ContentType` - Content-Type header (Char 100)
- `ReqMethod` - HTTP method (GET, POST, etc.) (Char 20)

### Constants
- `CRLF` - Carriage return/line feed constant (x'0d25')
- `ID1` - URL path identifier '/rest/' 
- `ID2` - Help URL identifier 'help/'

## Main Logic Flow

1. **Initial HTTP Header Setup**
   - Sets up initial Content-Type and security headers

2. **Request Processing**
   - Retrieves API key from HTTP_AUTHORIZATION header
   - Gets the request URI and HTTP method
   - Extracts the target program name from the URL

3. **Conditional Execution**
   - If URL contains 'help/', calls the HELP_PGMW program
   - Otherwise, checks for API key presence:
     - If API key exists, processes the request body
     - Translates data from ASCII to EBCDIC
     - Dynamically calls the requested program (via pgmname)
     - Returns the result
   - If no API key, returns an error message

4. **Response Handling**
   - Sends the appropriate response back to the client

## Error Handling

The program uses MONITOR/ON-ERROR blocks to handle exceptions:

1. **API Key Retrieval Error Handling**
   ```rpgle
   MONITOR;
   apiKey = %Str(GetEnv('HTTP_AUTHORIZATION'));
   ON-ERROR;
   Data = '{\"success\":false,'+
          '\"message\":\"ApiKey no existe\"}';
   endmon;
   ```

2. **URL Parsing Error Handling**
   ```rpgle
   Monitor;
     pos = %scan(ID1: URL) + %len(ID1);
     pgmname = %TRIM(%subst(url:pos));
   on-error;
      Data = 'Invalid URI';
   endmon;
   ```

3. **Program Execution Error Handling**
   ```rpgle
   MONITOR;
   Data = %Trim(EBCData);
   program(Data);
   ON-ERROR 211;
      Data = '{\"success\":false, '+
            '\"message\":\"error al intentar iniciar PGM\"}';
   ENDMON;
   ```

The program primarily uses JSON format for error responses, with fields for success status and error messages.

