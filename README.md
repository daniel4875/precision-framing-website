# Precision Framing Website

This is the code for the website for Precision Framing.

# Build

To build the web server as a JAR:

```
./mvnw clean package
```

The JAR will be located inside `target`.

# Run

To run the web server (assuming the JAR is named `webserver.jar`, use the actual name of the file if it is different):

```
java -jar webserver.jar
```

Then navigate to `http://localhost:8080` in a browser to view the website.

# Deployment

To run the web server in production, it should be behind a reverse proxy (such as Nginx) that handles HTTPS and listens on port `443` on the server, and then forwards connections to port `8080` that this web server is listening on.
