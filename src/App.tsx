import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'
import { Github, Wand2 } from 'lucide-react'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select'
import { Slider } from './components/ui/slider'
import { VideoInputForm } from './components/video-input-form'

export function App() {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <div className='flex items-center justify-between border-b px-6 py-3'>
          <h1 className='text-xl font-bold '>upload.ai</h1>
          <div className='flex items-center gap-3'>
            <span className='text-sm text-muted-foreground'>Desenvolvido por @samuellhuss</span>
            <Separator orientation='vertical' className='h-6' />
            <Button variant='outline'>
              <Github className='mr-2 h-4 w-4' />
              Github
            </Button>
          </div>
        </div>

        <main className='flex flex-1 gap-6 p-6'>
          <div className='flex flex-1 flex-col gap-4'>
            <div className='grid flex-1 grid-rows-2 gap-4'>
              <Textarea
                className='resize-none p-4 leading-relaxed'
                placeholder='Inclua o prompt para a IA...'
              />
              <Textarea
                className='resize-none p-4 leading-relaxed'
                placeholder='Resultado gerado pela IA'
                readOnly
              />
            </div>
            <p className='text-sm text-muted-foreground'>
              Lembre-se: você pode utilizar a variável{' '}
              <code className='text-red-400'>{'{transcription}'}</code> no seu prompt para
              adicionar o conteúdo da transcrição do vídeo selecionado.
            </p>
          </div>
          <aside className='w-80 space-y-6'>
            <VideoInputForm/>

            <Separator />
            <form className='space-y-6'>
              <div className='space-y-2'>
                <Label>Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Selecione um prompt' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='video-title'>Título do YouTube</SelectItem>
                    <SelectItem value='video-description'>Descrição do YouTube</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <Label>Modelo</Label>
                <Select defaultValue='gpt3.5' disabled>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className='block text-xs italic text-muted-foreground'>
                  Você poderá customizar essa opção em breve
                </span>
              </div>

              <div className='space-y-4'>
                <Label>Modelo</Label>
                <Slider min={0} max={1} step={0.1} />
                <span className='block text-xs italic leading-relaxed text-muted-foreground'>
                  Valores mais altos tendem a deixar o resultado mais criativo e com possíveis
                  erros.
                </span>
              </div>

              <Separator />

              <Button type='submit' className='w-full'>
                Executar <Wand2 className='ml-2 h-4 w-4' />{' '}
              </Button>
            </form>
          </aside>
        </main>
      </div>
    </>
  )
}