import ai from '@/assests/ai.json'
import block from '@/assests/block.json'
import cloud from '@/assests/cloud.json'
import meta from '@/assests/iot.json'
import { ProgramDataType } from "./type";

export const ProgramData: ProgramDataType[] = [
    { id: 0, slug: 'ai', name: 'Artificial Intelligence', animation: ai, navigate: '', description: "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential" },
    { id: 1, slug: 'cnc', name: 'Cloud-Native Computing', animation: cloud, navigate: '', description: 'Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model.' },
    { id: 2, slug: 'iot', name: 'Ambient Computing and IoT', animation: meta, navigate: '', description: 'Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful' },
    { id: 3, slug: 'bd', name: 'Web 3 and Metaverse', animation: block, navigate: '', description: 'In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens' },
]