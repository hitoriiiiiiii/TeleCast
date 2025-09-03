import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

// Dummy getSubjectColor function — replace with your own logic or import
const getSubjectColor = (subject: string) => {
    switch(subject.toLowerCase()) {
        case 'math': return '#FFD700';      // gold
        case 'science': return '#00BFFF';   // deep sky blue
        case 'history': return '#FF8C00';   // dark orange
        default: return '#ccc';
    }
}

interface Companion {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
}

interface CompanionListProps {
    title: string;
    companions?: Companion[];
    className?: string;
}

const Companionslist = ({ title, companions, className }: CompanionListProps) => {
    return (
        <article className={cn('companion-list', className)}>
            <h2 className="font-bold text-3xl mb-4">{title}</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-lg w-2/3">Lessons</TableHead>
                        <TableHead className="text-lg">Subject</TableHead>
                        <TableHead className="text-lg text-right">Duration</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {companions?.map(({ id, subject, name, topic, duration }, index) => (
                        <TableRow key={`${id}-${index}`}> 
                            <TableCell>
                                <Link href={`/companions/${id}`}>
                                    {/* Removed <a> tag here */}
                                    <div className="flex items-center gap-2 cursor-pointer">
                                        <div
                                            className="w-[72px] h-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                                            style={{ backgroundColor: getSubjectColor(subject) }}
                                        >
                                            <Image
                                                src={`/icons/${subject}.svg`}
                                                alt={subject}
                                                width={35}
                                                height={35}
                                                style={{ objectFit: 'contain' }} // Maintains aspect ratio
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <p className="font-bold text-2xl">{name}</p>
                                            <p className="text-lg">{topic}</p>
                                        </div>
                                    </div>
                                </Link>
                            </TableCell>

                            <TableCell>
                                <div className="subject-badge w-fit max-md:hidden">{subject}</div>
                                <div
                                    className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                                    style={{ backgroundColor: getSubjectColor(subject) }}
                                >
                                    <Image
                                        src={`/icons/${subject}.svg`}
                                        alt={subject}
                                        width={18}
                                        height={18}
                                        style={{ objectFit: 'contain' }} // Maintains aspect ratio
                                    />
                                </div>
                            </TableCell>

                            <TableCell>
                                <div className="flex items-center gap-2 w-full justify-end">
                                    <p className="text-2xl">
                                        {duration} <span className="max-md:hidden">mins</span>
                                    </p>
                                    <Image
                                        src="/icons/clock.svg"
                                        alt="minutes"
                                        width={14}
                                        height={14}
                                        className="md:hidden"
                                    />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </article>
    )
}

export default Companionslist
