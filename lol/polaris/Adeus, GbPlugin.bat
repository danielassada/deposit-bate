@Echo Off

Title Adeus, GbPlugin
Mode 73,19

Reg Add "HKLM" /F>nul 2>&1
If Not "%ErrorLevel%"=="0" (
Color 6f
Echo. & Echo  Execute o script como administrador.
Echo. & Echo  Pressione qualquer tecla para finalizar o script...
Pause>nul
Exit)

Color 1f
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Set "Script-Versao=2.0.0.0"
Set "Script-Ano=2017"
::---------------------------------------------------------------------
Set "RMensagem=O seu computador ser  reiniciado em 5 segundos..."
Set "HKLM_RunOnce=HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce"
Set "NomeLinha01=kcezbcchdajimudlceavhgiaaviptdzrrjhhfbofyjeimouiytuwpmsszukgzelfcgvyf"
Set "NomeLinha02=wtcgbdgywffmrpgeuiaqkldyehpjivcqmjsrjungxhpbahwuugqetxypfxlijtbnvpbju"
::---------------------------------------------------------------------
If "%~1"=="02" (Goto Passo-02)
If "%~1"=="03" (Goto Passo-03)
If "%~1"=="04" (Goto Passo-04)
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


:MenuPrincipal
Cls
Echo.
Echo  ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ¿
Echo  ³ ² Script desenvolvido para simplificar a remo‡Æo                    ³
Echo  ³ ² do G-Buster Browser Defense (Gbplugin/Gbpsv.exe).                 ³
Echo  ÃÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÂÄÂÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ´
Echo  ³ ² Nome  : Adeus, GbPlugin       ³ ³ ± Bancos suportados             ³
Echo  ³ ² VersÆo: %Script-Versao%               ³ ÃÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ´
Echo  ³ ² Ano   : %Script-Ano%                  ³ ³ ° Ita£                          ³
Echo  ³ ² Autor : Humberto Freitas      ³ ³ ° Caixa                         ³
Echo  ÃÄÄÄÂÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ´ ³ ° Banco do Brasil               ³
Echo  ³ ^> ³ Menu                        ³ ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÙ
Echo  ÃÄÄÄÅÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ´
Echo  ³ 1 ³ Come‡ar a remo‡Æo           ³ ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ¿
Echo  ³ 2 ³ Ver o tutorial              ³ ³ ²±°°°°  Veja o tutorial  °°°°±² ³
Echo  ³ 3 ³ Sair                        ³ ³ ²±°°   antes de utilizar   °°±² ³
Echo ÚÁÄÄÄÁÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÙ ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÙ
Set "Menu="
Set /p "Menu=³> "
If "%Menu%"=="1" (Goto Passo-01)
If "%Menu%"=="2" (Start "" "https://youtu.be/vqXcsMg7FMM")
If "%Menu%"=="3" (Exit)
Goto MenuPrincipal


:Passo-01
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Cls & Echo. & Echo  [...]
::---------------------------------------------------------------------
Del /F /Q /A "%SystemDrive%\hu0a932ip9s5.TxT">nul 2>&1
RMDIR /S /Q "%SystemDrive%\[ Adeus, GbPlugin ]">nul 2>&1
MKDIR "%SystemDrive%\[ Adeus, GbPlugin ]">nul 2>&1
::---------------------------------------------------------------------
For /f "delims=" %%l in ('Type "%~f0" ^| Findstr /n /c:"::%NomeLinha01%"') do (Set /a "PularLinhas01=2 + %%~l">nul 2>&1)
For /f "delims=" %%l in ('Type "%~f0" ^| Findstr /n /c:"::%NomeLinha02%"') do (Set /a "PularLinhas02=2 + %%~l">nul 2>&1)
::---------------------------------------------------------------------
Set /a "PularLinhas02=%PularLinhas02% - %PularLinhas01%"
Type "%~f0" | More +%PularLinhas01%>"%SystemDrive%\[ Adeus, GbPlugin ]\01.bat"
(Echo %PularLinhas02%)>"%SystemDrive%\hu0a932ip9s5.TxT"
::---------------------------------------------------------------------
Reg Add "%HKLM_RunOnce%" /v "*Adeus, GbPlugin" /d "Cmd.exe /c Call \"%~f0\" \"02"\" /F>nul 2>&1
::---------------------------------------------------------------------
Echo. & Echo  %RMensagem%
::---------------------------------------------------------------------
Ver | Findstr /c:"5\.1\.">nul 2>&1
If "%ErrorLevel%"=="0" (Set "Vers=-8")
Ver | Findstr /c:"5\.2\.">nul 2>&1
If "%ErrorLevel%"=="0" (Set "Vers=-8")
Ver | Findstr /c:"6\.0\.">nul 2>&1
If "%ErrorLevel%"=="0" (Set "Vers=-8")
Ver | Findstr /c:"6\.1\.">nul 2>&1
If "%ErrorLevel%"=="0" (Set "Vers=-8")
If "%Vers%"=="-8" (
Reagentc /disable>nul 2>&1
Reagentc /enable>nul 2>&1
Shutdown -r -f -t 05 -c "%RMensagem%">nul 2>&1) Else (Shutdown /r /o /t 05 /f /c "%RMensagem%">nul 2>&1)
::---------------------------------------------------------------------
:P01_Pause
Pause>nul
Goto P01_Pause
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


:Passo-02
Cls
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
If Not Exist "%SystemDrive%\[ Adeus, GbPlugin ]\OK" (
Reg Add "%HKLM_RunOnce%" /v "*Adeus, GbPlugin" /d "Cmd.exe /c Call \"%~f0\" \"02"\" /F>nul 2>&1
Goto P02-EM)
::---------------------------------------------------------------------
Bcdedit /set {current} safeboot Network>nul 2>&1
::---------------------------------------------------------------------
Reg Add "%HKLM_RunOnce%" /v "*Adeus, GbPlugin" /d "Cmd.exe /c Call \"%~f0\" \"03"\" /F>nul 2>&1
::---------------------------------------------------------------------
Shutdown -r -f -t 00>nul 2>&1
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Exit


:P02-EM
Cls
Echo.
Echo                                                                 ÚÄÄÄÄÄÄ¿
Echo  ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÙ Erro ³
Echo  ³ ² Vocˆ nÆo removeu os arquivos no modo de recupera‡Æo.              ³
Echo  ÃÄÄÄÂÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ´
Echo  ³ ^> ³ Menu                                                            ³
Echo  ÃÄÄÄÅÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ´
Echo  ³ 1 ³ Tentar novamente                                                ³
Echo  ³ 2 ³ Desistir                                                        ³
Echo ÚÁÄÄÄÁÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÙ
Set "Menu="
Set /p "Menu=³> "
If "%Menu%"=="1" (Goto Passo-01)
If "%Menu%"=="2" (Goto Passo-02_Limpeza)
Goto P02-EM


:Passo-02_Limpeza
Cls
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Reg delete "%HKLM_RunOnce%" /v "*Adeus, GbPlugin" /F>nul 2>&1
::---------------------------------------------------------------------
Del /F /Q /A "%SystemDrive%\hu0a932ip9s5.TxT">nul 2>&1
RMDIR /S /Q "%SystemDrive%\[ Adeus, GbPlugin ]">nul 2>&1
::---------------------------------------------------------------------
Echo. & Echo  Conclu¡do.
Echo. & Echo  Pressione qualquer tecla para finalizar o script...
Pause>nul
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Exit


:Passo-03
Cls
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
If /i Not "%SafeBoot_Option%"=="Network" (
Reg Add "%HKLM_RunOnce%" /v "*Adeus, GbPlugin" /d "Cmd.exe /c Call \"%~f0\" \"03"\" /F>nul 2>&1
Goto P03-EM)
::---------------------------------------------------------------------
Regedit /S "%SystemDrive%\[ Adeus, GbPlugin ]\02.reg">nul 2>&1
RMDIR /S /Q "%ProgramData%\GbPlugin">nul 2>&1
RMDIR /S /Q "%ProgramData%\GAS Tecnologia">nul 2>&1
Netsh advfirewall firewall delete rule name="Diebold">nul 2>&1
Netsh advfirewall firewall delete rule name="Warsaw">nul 2>&1
Netsh advfirewall firewall delete rule name="Diebold - Warsaw">nul 2>&1
Reg delete "HKLM\SYSTEM\CurrentControlSet\services\GbpKm" /F>nul 2>&1
Reg delete "HKLM\SYSTEM\CurrentControlSet\services\GbpSv" /F>nul 2>&1
Reg delete "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{20E60725-16C8-4FB9-8BC2-AF92C5F8D06D}_is1" /F>nul 2>&1
::---------------------------------------------------------------------
Reg Add "%HKLM_RunOnce%" /v "*Adeus, GbPlugin" /d "Cmd.exe /c Call \"%~f0\" \"04"\" /F>nul 2>&1
::---------------------------------------------------------------------
Del /F /Q /A "%SystemDrive%\hu0a932ip9s5.TxT">nul 2>&1
RMDIR /S /Q "%SystemDrive%\[ Adeus, GbPlugin ]">nul 2>&1
Bcdedit /deletevalue {current} safeboot>nul 2>&1
::---------------------------------------------------------------------
Shutdown -r -f -t 00>nul 2>&1
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Exit


:P03-EM
Cls
Echo.
Echo                                                                 ÚÄÄÄÄÄÄ¿
Echo  ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÙ Erro ³
Echo  ³ ² O Windows nÆo est  em modo de seguran‡a com rede.                 ³
Echo  ÃÄÄÄÂÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ´
Echo  ³ ^> ³ Menu                                                            ³
Echo  ÃÄÄÄÅÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ´
Echo  ³ 1 ³ Tentar novamente                                                ³
Echo  ³ 2 ³ Desistir                                                        ³
Echo ÚÁÄÄÄÁÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÙ
Set "Menu="
Set /p "Menu=³> "
If "%Menu%"=="1" (Goto Passo-03_TN)
If "%Menu%"=="2" (Goto Passo-03_Limpeza)
Goto P03-EM


:Passo-03_TN
Cls
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Bcdedit /set {current} safeboot Network>nul 2>&1
::---------------------------------------------------------------------
Shutdown -r -f -t 00>nul 2>&1
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Exit


:Passo-03_Limpeza
Cls
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Reg delete "%HKLM_RunOnce%" /v "*Adeus, GbPlugin" /F>nul 2>&1
::---------------------------------------------------------------------
Del /F /Q /A "%SystemDrive%\hu0a932ip9s5.TxT">nul 2>&1
RMDIR /S /Q "%SystemDrive%\[ Adeus, GbPlugin ]">nul 2>&1
Bcdedit /deletevalue {current} safeboot>nul 2>&1
::---------------------------------------------------------------------
Shutdown -r -f -t 00>nul 2>&1
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Exit


:Passo-04
Cls
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Sc delete "GbpSv">nul 2>&1
Sc delete "Warsaw Technology">nul 2>&1
Control.exe NetConnections>nul 2>&1
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Exit


::kcezbcchdajimudlceavhgiaaviptdzrrjhhfbofyjeimouiytuwpmsszukgzelfcgvyf


@Echo Off

Title 01 - Adeus, GbPlugin
Color 1f

CD /D "%~dp0"

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Echo. & Echo  [...]
::---------------------------------------------------------------------
RMDIR /S /Q "..\Program Files\Warsaw">nul 2>&1
RMDIR /S /Q "..\Program Files\Diebold">nul 2>&1
RMDIR /S /Q "..\Program Files\GbPlugin">nul 2>&1
RMDIR /S /Q "..\Program Files\GAS Tecnologia">nul 2>&1
::---------------------------------------------------------------------
RMDIR /S /Q "..\Program Files (x86)\Warsaw">nul 2>&1
RMDIR /S /Q "..\Program Files (x86)\Diebold">nul 2>&1
RMDIR /S /Q "..\Program Files (x86)\GbPlugin">nul 2>&1
RMDIR /S /Q "..\Program Files (x86)\GAS Tecnologia">nul 2>&1
::---------------------------------------------------------------------
Del /F /Q /A "..\Windows\System32\drivers\gbpddreg32.sys">nul 2>&1
Del /F /Q /A "..\Windows\System32\drivers\gbpddreg64.sys">nul 2>&1
Del /F /Q /A "..\Windows\System32\drivers\gbpddreg86.sys">nul 2>&1
Del /F /Q /A "..\Windows\System32\drivers\gbpndisrdn.sys">nul 2>&1
Del /F /Q /A "..\Windows\System32\drivers\GbpKm.sys">nul 2>&1
Del /F /Q /A "..\Windows\System32\drivers\wsddfac.sys">nul 2>&1
Del /F /Q /A "..\Windows\System32\drivers\wsddntf.cat">nul 2>&1
Del /F /Q /A "..\Windows\System32\drivers\wsddntf.inf">nul 2>&1
Del /F /Q /A "..\Windows\System32\drivers\wsddntf.sys">nul 2>&1
Del /F /Q /A "..\Windows\System32\drivers\wsddpp.sys">nul 2>&1
Del /F /Q /A "..\Windows\System32\drivers\wsddprm.sys">nul 2>&1
::---------------------------------------------------------------------
Del /F /Q /A "..\Windows\SysWOW64\drivers\gbpddreg32.sys">nul 2>&1
Del /F /Q /A "..\Windows\SysWOW64\drivers\gbpddreg64.sys">nul 2>&1
Del /F /Q /A "..\Windows\SysWOW64\drivers\gbpddreg86.sys">nul 2>&1
Del /F /Q /A "..\Windows\SysWOW64\drivers\gbpndisrdn.sys">nul 2>&1
Del /F /Q /A "..\Windows\SysWOW64\drivers\GbpKm.sys">nul 2>&1
Del /F /Q /A "..\Windows\SysWOW64\drivers\wsddfac.sys">nul 2>&1
Del /F /Q /A "..\Windows\SysWOW64\drivers\wsddntf.cat">nul 2>&1
Del /F /Q /A "..\Windows\SysWOW64\drivers\wsddntf.inf">nul 2>&1
Del /F /Q /A "..\Windows\SysWOW64\drivers\wsddntf.sys">nul 2>&1
Del /F /Q /A "..\Windows\SysWOW64\drivers\wsddpp.sys">nul 2>&1
Del /F /Q /A "..\Windows\SysWOW64\drivers\wsddprm.sys">nul 2>&1
::---------------------------------------------------------------------
Set /p PularLinhas=<"..\hu0a932ip9s5.TxT"
Type "%~f0" | More +%PularLinhas%>"02.reg"
Regedit /S "02.reg">nul 2>&1
Type nul>"OK"
::---------------------------------------------------------------------
Echo. & Echo  Conclu¡do.
Echo. & Echo  Pressione qualquer tecla para finalizar o script...
Pause>nul
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Exit


::wtcgbdgywffmrpgeuiaqkldyehpjivcqmjsrjungxhpbahwuugqetxypfxlijtbnvpbju


Windows Registry Editor Version 5.00

;====================================================
[HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run]
"Diebold"=-
"Warsaw"=-
"Diebold - Warsaw"=-
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run]
"Diebold"=-
"Warsaw"=-
"Diebold - Warsaw"=-
[HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Run]
"Diebold"=-
"Warsaw"=-
"Diebold - Warsaw"=-
;====================================================
[-HKEY_CURRENT_USER\SOFTWARE\Microsoft\Internet Explorer\LowRegistry\Software\GAS Tecnologia]
[-HKEY_LOCAL_MACHINE\SOFTWARE\GbPlugin]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer\LowRegistry\Software\GAS Tecnologia]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{20E60725-16C8-4FB9-8BC2-AF92C5F8D06D}_is1]
[-HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\GbPlugin]
[-HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Internet Explorer\LowRegistry\Software\GAS Tecnologia]
;====================================================
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\Diebold]
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\gbpddreg]
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\GbpKm]
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\GbpSv]
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\ndisrd]
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\Warsaw Technology]
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\Warsaw]
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\Warsaw_PP]
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\wsddfac]
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\wsddpp]
;====================================================
[-HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify\ GbPluginBb]
[-HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify\ GbPluginCef]
[-HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify\ GbPluginUni]
;====================================================
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify\ GbPluginBb]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify\ GbPluginCef]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify\ GbPluginUni]
;====================================================
[-HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify\ GbPluginBb]
[-HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify\ GbPluginCef]
[-HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify\ GbPluginUni]
;====================================================
[-HKEY_CLASSES_ROOT\gas.events.abn]
[-HKEY_CLASSES_ROOT\gas.events.abn.0]
[-HKEY_CLASSES_ROOT\gas.events.abn.1]
[-HKEY_CLASSES_ROOT\gas.events.abn.2]
[-HKEY_CLASSES_ROOT\gas.events.abn.3]
[-HKEY_CLASSES_ROOT\gas.events.abn.4]
[-HKEY_CLASSES_ROOT\gas.events.abn.5]
[-HKEY_CLASSES_ROOT\gas.events.abn.6]
[-HKEY_CLASSES_ROOT\gas.events.abn.7]
[-HKEY_CLASSES_ROOT\gas.events.abn.8]
[-HKEY_CLASSES_ROOT\gas.events.abn.9]
[-HKEY_CLASSES_ROOT\gas.ibh.abn]
[-HKEY_CLASSES_ROOT\gas.ibh.abn.0]
[-HKEY_CLASSES_ROOT\gas.ibh.abn.1]
[-HKEY_CLASSES_ROOT\gas.ibh.abn.2]
[-HKEY_CLASSES_ROOT\gas.ibh.abn.3]
[-HKEY_CLASSES_ROOT\gas.ibh.abn.4]
[-HKEY_CLASSES_ROOT\gas.ibh.abn.5]
[-HKEY_CLASSES_ROOT\gas.ibh.abn.6]
[-HKEY_CLASSES_ROOT\gas.ibh.abn.7]
[-HKEY_CLASSES_ROOT\gas.ibh.abn.8]
[-HKEY_CLASSES_ROOT\gas.ibh.abn.9]
;====================================================
[-HKEY_CLASSES_ROOT\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540000}]
[-HKEY_CLASSES_ROOT\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540001}]
[-HKEY_CLASSES_ROOT\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540002}]
[-HKEY_CLASSES_ROOT\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540003}]
[-HKEY_CLASSES_ROOT\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540004}]
[-HKEY_CLASSES_ROOT\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540005}]
[-HKEY_CLASSES_ROOT\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540006}]
[-HKEY_CLASSES_ROOT\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540007}]
[-HKEY_CLASSES_ROOT\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540008}]
[-HKEY_CLASSES_ROOT\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540009}]
;====================================================
[-HKEY_CLASSES_ROOT\WOW6432Node\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540000}]
[-HKEY_CLASSES_ROOT\WOW6432Node\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540001}]
[-HKEY_CLASSES_ROOT\WOW6432Node\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540002}]
[-HKEY_CLASSES_ROOT\WOW6432Node\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540003}]
[-HKEY_CLASSES_ROOT\WOW6432Node\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540004}]
[-HKEY_CLASSES_ROOT\WOW6432Node\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540005}]
[-HKEY_CLASSES_ROOT\WOW6432Node\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540006}]
[-HKEY_CLASSES_ROOT\WOW6432Node\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540007}]
[-HKEY_CLASSES_ROOT\WOW6432Node\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540008}]
[-HKEY_CLASSES_ROOT\WOW6432Node\CLSID\{C41A1C0E-EA6C-11D4-B1B8-444553540009}]
;====================================================