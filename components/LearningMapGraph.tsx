'use client'

import React, { useCallback } from 'react'
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  MiniMap,
  ConnectionMode,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { useRouter } from 'next/navigation'
import { learningMapNodes, learningMapEdges } from '@/lib/learningMapData'

const nodeTypes = {
  default: ({ data }: any) => (
    <div
      className={`px-4 py-2 rounded-lg shadow-md border-2 cursor-pointer transition-all hover:scale-105 ${
        data.level === 'beginner'
          ? 'bg-green-100 border-green-300'
          : data.level === 'intermediate'
          ? 'bg-yellow-100 border-yellow-300'
          : 'bg-red-100 border-red-300'
      }`}
    >
      <div className="font-semibold text-gray-900">{data.label}</div>
      <div className="text-xs mt-1 flex items-center">
        <span className={`px-2 py-0.5 rounded-full ${
          data.level === 'beginner'
            ? 'bg-green-200 text-green-800'
            : data.level === 'intermediate'
            ? 'bg-yellow-200 text-yellow-800'
            : 'bg-red-200 text-red-800'
        }`}>
          {data.level}
        </span>
        <span className="ml-2 text-gray-600">{data.category}</span>
      </div>
    </div>
  ),
}

export default function LearningMapGraph() {
  const router = useRouter()
  const [nodes, setNodes, onNodesChange] = useNodesState(learningMapNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(learningMapEdges)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const onNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      if (node.data?.href) {
        router.push(node.data.href)
      }
    },
    [router]
  )

  return (
    <div className="w-full h-[600px] rounded-xl border border-gray-300 bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView
        attributionPosition="bottom-right"
      >
        <Background color="#aaa" gap={16} />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            switch (node.data?.level) {
              case 'beginner': return '#86efac'
              case 'intermediate': return '#fde047'
              case 'advanced': return '#fca5a5'
              default: return '#ddd'
            }
          }}
          nodeStrokeWidth={3}
        />
      </ReactFlow>
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md border border-gray-200">
        <div className="text-sm font-medium text-gray-900 mb-2">Legend</div>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-xs text-gray-600">Beginner</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <span className="text-xs text-gray-600">Intermediate</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="text-xs text-gray-600">Advanced</span>
          </div>
        </div>
      </div>
    </div>
  )
}