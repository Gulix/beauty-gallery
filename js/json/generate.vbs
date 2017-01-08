Set objFSO=CreateObject("Scripting.FileSystemObject")

' How to write file
outFile=".\load-photos.js"
Set objFile = objFSO.CreateTextFile(outFile,True)
objFile.Write "define([" & vbCrLf

objStartFolder = "."
Set objFolder = objFSO.GetFolder(objStartFolder)
Set colFiles = objFolder.Files
NbTemplates = 0
For Each objTemplateFile in colFiles
    If objTemplateFile.Name <> "load-photos.js" Then
      If LCase(objFSO.GetExtensionName(objTemplateFile.Name)) = "js" Then
          If NbTemplates <> 0 Then
            objFile.Write ", " & vbCrLf
          End If
          objFile.Write "'json/" & Left(objTemplateFile.Name, Len(objTemplateFile.Name) - 3)  & "'"
          NbTemplates = NbTemplates + 1
      End If
    End If
Next

objFile.Write "], " & vbCrLf
objFile.Write " function(" & vbCrLf

For i = 1 To NbTemplates
    IF i <> 1 Then
        objFile.Write ", "
    End If
    objFile.Write "tpl" & i
Next

objFile.Write ") " & vbCrLf & " { return { load: function() {" & vbCrLf

objFile.Write "var list = [ ];" & vbCrLf

For i = 1 To NbTemplates
    objFile.Write "list = list.concat(tpl" & i & ".photos());" & vbCrLf
Next
objFile.Write "return list;" & vbCrLf

objFile.Write vbCrLf & "} }; });"


objFile.Close
