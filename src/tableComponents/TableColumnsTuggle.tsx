import type { ColumnVisibleFlags } from '../App'

type TableColumnsToggleProps = {
	columnsToggleStatus: ColumnVisibleFlags[];
	setColumnsToggleStatus: React.Dispatch<React.SetStateAction<ColumnVisibleFlags[]>>;
}

function TableColumnsTuggle({ columnsToggleStatus, setColumnsToggleStatus}: TableColumnsToggleProps) {

	const onCheck = (e: React.ChangeEvent<HTMLInputElement>, title: string) => {
		setColumnsToggleStatus(prev => 
			prev.map(flag => flag.title === title ? 
			{ ...flag, isVisible: e.target.checked } : flag
    ));
	}

	const resetToggle = () => {
		setColumnsToggleStatus(prev => prev.map(flag => ({ ...flag, isVisible: true })))
	}

	return (
		<div className='p-8 flex items-center gap-4 bg-amber-50 text-[20px] border-2'>
			{columnsToggleStatus.map((column) => 
				<label key={column.id}>
					{column.title}
					<input 
						className='ml-2'
						type='checkbox'
						checked={column.isVisible}
						onChange={(e) => onCheck(e, column.title)}
					/>
				</label>
			)}
			<button className='
				inline-block
				px-4 py-2
				bg-transparent
				text-blue-600
				font-medium
				rounded-lg
				border border-blue-600
				hover:bg-blue-50
				focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
				transition'
			onClick={resetToggle}>Reset Toggle</button>
		</div>
	);
}

export default TableColumnsTuggle;
