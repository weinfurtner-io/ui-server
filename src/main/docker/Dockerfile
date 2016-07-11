FROM frolvlad/alpine-oraclejdk8:slim
MAINTAINER jared@weinfurtner.io
ADD ui-server-0.0.1-SNAPSHOT.jar ui-server.jar
RUN sh -c 'touch /ui-server.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/ui-server.jar"]