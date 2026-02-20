"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { FileItem } from "@/types/portal"
import { format } from "date-fns"

interface FileRepositoryProps {
  files: FileItem[]
  className?: string
}

const FILE_TYPE_LABELS: Record<FileItem["type"], string> = {
  pdf: "PDF",
  video: "Video",
  image: "Imagen",
  document: "Documento",
  other: "Otro",
}

export function FileRepository({ files, className }: FileRepositoryProps) {
  const handleDownload = (file: FileItem) => {
    // Simular descarga
    window.open(file.downloadUrl, "_blank")
  }

  return (
    <div className={className}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead className="text-right">Acción</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                No hay archivos disponibles
              </TableCell>
            </TableRow>
          ) : (
            files.map((file) => (
              <TableRow key={file.id}>
                <TableCell className="font-medium">{file.name}</TableCell>
                <TableCell>
                  {format(new Date(file.date), "dd MMM yyyy")}
                </TableCell>
                <TableCell>{FILE_TYPE_LABELS[file.type]}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDownload(file)}
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Descargar
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
