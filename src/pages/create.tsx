import { useState, useRef } from 'react';
import { ReactSketchCanvasRef, ReactSketchCanvas } from 'react-sketch-canvas';
import Head from 'next/head';
import ToolButton from './component/ToolButton';
import clear from 'public/clear.svg'
import eraser from 'public/eraser.svg'
import redo from 'public/redo.svg'
import brush from 'public/brush.svg'
import undo from 'public/undo.svg'
import reset from 'public/reset.svg'

const Canvas = () => {
    const [brushStroke, setBrushStroke] = useState(1)
    const [eraserStroke, setEraserStroke] = useState(1)
    const [brushColor, setBrushColor] = useState('red')
    const [canvasColor, setCanvasColor] = useState('white')

    const [activeTool, setActiveTool] = useState('brush')

    const canvasRef = useRef<ReactSketchCanvasRef>(null);

    const handleToolClick = (toolName: string) => {
        if (['brush', 'eraser'].includes(toolName))
            setActiveTool(toolName)

        switch (toolName) {
            case 'brush': {
                canvasRef.current?.eraseMode(false)
                break;
            }
            case 'eraser': {
                canvasRef.current?.eraseMode(true)
                break;
            }
            case 'undo': {
                canvasRef.current?.undo()
                break;
            }
            case 'redo': {
                canvasRef.current?.redo()
                break;
            }
            case 'clear': {
                canvasRef.current?.clearCanvas()
                break;
            }
            case 'reset': {
                canvasRef.current?.resetCanvas()
                break;
            }
        }

    }

    return (
        <>
            <Head>
                <title>Create</title>
            </Head>
            <div className='h-screen w-full bg-slate-500 flex'>
                {/* Toolbar */}
                <div>
                    <ToolButton
                        activeTool={activeTool}
                        toolName='clear'
                        icon={clear}
                        onClick={handleToolClick}
                    />
                    <ToolButton
                        toolName='reset'
                        activeTool={activeTool}
                        icon={reset}
                        onClick={handleToolClick}
                    />
                    <ToolButton
                        toolName='undo'
                        activeTool={activeTool}
                        icon={undo}
                        onClick={handleToolClick}
                    />
                    <ToolButton
                        toolName='redo'
                        activeTool={activeTool}
                        icon={redo}
                        onClick={handleToolClick}
                    />
                    <ToolButton
                        toolName='eraser'
                        icon={eraser}
                        activeTool={activeTool}
                        onClick={handleToolClick} />
                    <ToolButton
                        toolName='brush'
                        icon={brush}
                        activeTool={activeTool}
                        onClick={handleToolClick} />
                </div>
                <ReactSketchCanvas
                    style={{
                        height: 400,
                        width: 600
                    }}
                    width="175"
                    height="175"
                    strokeWidth={brushStroke}
                    strokeColor={brushColor}
                    className='w-[600px]'
                    canvasColor={canvasColor}
                    exportWithBackgroundImage={true}
                    ref={canvasRef}
                />

            </div>
        </>
    );
};

export default Canvas