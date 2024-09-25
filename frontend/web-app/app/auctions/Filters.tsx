import { useParamsStore } from '@/hooks/useParamsStore';
import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react'
import { AiOutlineClockCircle, AiOutlineSortAscending } from 'react-icons/ai';
import { BsFillStopCircleFill, BsStopwatchFill } from 'react-icons/bs';
import { GiFinishLine, GiFlame } from 'react-icons/gi';

const pageSizeButtons = [4, 8, 12];

const orderButtons = [
  {
    label: 'A-Z',
    icon: AiOutlineSortAscending,
    value: 'make'
  },
  {
    label: 'Në Përfundim',
    icon: AiOutlineClockCircle,
    value: 'endingSoon'
  },
  {
    label: 'Të Reja',
    icon: BsFillStopCircleFill,
    value: 'new'
  }
];

const filterButtons = [
  {
    label: 'Ankande Live',
    icon: GiFlame,
    value: 'live'
  },
  {
    label: 'Në Përfundim < 6',
    icon: GiFinishLine,
    value: 'endingSoon'
  },
  {
    label: 'Të Përfunduara',
    icon: BsStopwatchFill,
    value: 'finished'
  }
];

export default function Filters() {
  const pageSize = useParamsStore(state => state.pageSize);
  const setParams = useParamsStore(state => state.setParams);
  const orderBy = useParamsStore(state => state.orderBy);
  const filterBy = useParamsStore(state => state.filterBy);
  
  return (
    <div className='flex justify-between items-center mb-4'>

<div>
        <span className='uppercase text-sm text-gray-500 mr-2'>Rendit sipas</span>
        <Button.Group>
          {filterButtons.map(({ label, icon: Icon, value }) => (
            <Button key={value}
              onClick={() => setParams({ filterBy: value })}
              color={`${filterBy === value ? 'red' : 'gray'}`}
            >
              <Icon className='mr-3 h-4 w-4' />
              {label}
            </Button>
          ))}
        </Button.Group>
      </div>

      <div>
        <span className='uppercase text-sm text-gray-500 mr-2'>Rendit sipas</span>
        <Button.Group>
          {orderButtons.map(({ label, icon: Icon, value }) => (
            <Button key={value}
              onClick={() => setParams({ orderBy: value })}
              color={`${orderBy === value ? 'red' : 'gray'}`}
            >
              <Icon className='mr-3 h-4 w-4' />
              {label}
            </Button>
          ))}
        </Button.Group>
      </div>
      <div>
        <span className='uppercase text-sm text-gray-500 mr-2'>Madhësia e Faqes</span>
        <ButtonGroup>
          {pageSizeButtons.map((value, i) => (
            <Button key={i}
              onClick={() => setParams({ pageSize: value })}
              color={`${pageSize === value ? 'red' : 'gray'}`}
              className='focus:ring-0'
            >
              {value}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  )
}
