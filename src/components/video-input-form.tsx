import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { FileVideo, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ChangeEvent, useMemo, useState } from "react";

export function VideoInputForm() {
    const [videoFile, setVideoFile] = useState<File | null> (null)
    
    function handleFileSelected(event: ChangeEvent<HTMLInputElement>){
        const {files} = event.currentTarget

        if(!files) {
            return
        }

        const selectedFile = files[0]

        setVideoFile(selectedFile)
    }

    const previewURL = useMemo(() => {
        if(!videoFile){
            return null
        }

        return URL.createObjectURL(videoFile)
    }, [videoFile])

    return (
        <form className='space-y-6'>
              <label
                className='relative flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed text-sm text-muted-foreground hover:bg-primary/5'
                htmlFor='video'
              >
                {previewURL ? (
                    <video src={previewURL} controls={false} className="absolute inset-0 pointer-events-none"></video>
                ) : (
                    <>
                        <FileVideo className='h-4 w-4' />
                        Selecione um vídeo
                    </>
                )}
              </label>
              <input type='file' name='video' id='video' accept='video/mp4' className='sr-only' onChange={handleFileSelected} />

              <Separator />

              <div className='space-y-2'>
                <Label htmlFor='transcription-prompt'>Prompt de transcrição</Label>
                <Textarea
                  id='transcription-prompt'
                  className='h-20 resize-none leading-relaxed'
                  placeholder='Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)'
                />
              </div>
              <Button className='w-full gap-2' type='submit'>
                Carregar vídeo <Upload className='h-4 w-4' />
              </Button>
            </form>
    )
}