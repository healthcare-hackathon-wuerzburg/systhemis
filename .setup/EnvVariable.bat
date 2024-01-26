ECHO "Setting Variables"
call nvm install 20.11.0
call nvm use 20.11.0
rem call SETX -m JAVA_HOME "C:\Program Files\Eclipse Adoptium\jdk-21.0.2.13-hotspot"
rem call SETX -m PATH_JAVA "C:\Program Files\Eclipse Adoptium\jdk-21.0.2.13-hotspot\bin"
call refreshenv
call node --version
rem call echo %JAVA_HOME%
rem call echo %PATH_JAVA%
cmd /k