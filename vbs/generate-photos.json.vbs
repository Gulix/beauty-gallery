Set objFSO=CreateObject("Scripting.FileSystemObject")

author="Eric"
category="nous2"
' How to write file
outFile=".\load-photos-" & author & "-" & category & ".js"
Set objFile = objFSO.CreateTextFile(outFile,True)

objStartFolder = "."
Set objFolder = objFSO.GetFolder(objStartFolder)
Set colFiles = objFolder.Files
objFile.Write "define([], function() { return { photos: function() {"
objFile.Write "  var photos = [];"
NbPhotos = 0
For Each objPhotoFile in colFiles
    If LCase(objFSO.GetExtensionName(objPhotoFile.Name)) = "jpg" Then
        objFile.Write "  photos.push({ ""file"": """ & objPhotoFile.Name & """ , ""author"": """ & author & """, ""category"": """ & category & """ });" & vbCrLf 
        NbPhotos = NbPhotos + 1
    End If
Next

objFile.Write "  return photos;" & vbCrLf & "}}})" 

objFile.Close
