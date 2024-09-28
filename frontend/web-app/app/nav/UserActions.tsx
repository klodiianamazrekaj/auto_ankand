'use client'

import { Dropdown, DropdownDivider, DropdownItem } from 'flowbite-react'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from 'react-icons/ai'
import { HiCog, HiUser } from 'react-icons/hi2'

type Props = {
    user: User
}

export default function UserActions({ user }: Props) {
    return (
        <Dropdown inline label={`Mirë se erdhe ${user.name}`}>
            <DropdownItem icon={HiUser}>
                <Link href='/'>
                    Ankandet e Mia
                </Link>
            </DropdownItem>
            <DropdownItem icon={AiFillTrophy}>
                <Link href='/'>
                    Ankandet e Fituara
                </Link>
            </DropdownItem>
            <DropdownItem icon={AiFillCar}>
                <Link href='/'>
                    Nxirr makinën time në shitje
                </Link>
            </DropdownItem>
            <DropdownItem icon={HiCog}>
                <Link href='/'>
                    Session (dev only!)
                </Link>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem icon={AiOutlineLogout} onClick={() => signOut({ callbackUrl: '/' })}>
                Dil
            </DropdownItem>
        </Dropdown>
    )
}
