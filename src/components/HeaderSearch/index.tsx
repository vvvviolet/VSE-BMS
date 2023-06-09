import type { AutoCompleteProps } from 'antd/es/auto-complete';
import React from 'react';

export type HeaderSearchProps = {
  onSearch?: (value?: string) => void;
  onChange?: (value?: string) => void;
  onVisibleChange?: (b: boolean) => void;
  className?: string;
  placeholder?: string;
  options: AutoCompleteProps['options'];
  defaultVisible?: boolean;
  visible?: boolean;
  defaultValue?: string;
  value?: string;
};

const HeaderSearch: React.FC<HeaderSearchProps> = () => {
  // const {
  //   className,
  //   defaultValue,
  //   onVisibleChange,
  //   placeholder,
  //   visible,
  //   defaultVisible,
  //   ...restProps
  // } = props;

  // const inputRef = useRef<InputRef | null>(null);

  // const [value, setValue] = useMergedState<string | undefined>(defaultValue, {
  //   value: props.value,
  //   onChange: props.onChange,
  // });

  // const [searchMode, setSearchMode] = useMergedState(defaultVisible ?? false, {
  //   value: props.visible,
  //   onChange: onVisibleChange,
  // });

  // const inputClass = classNames(styles.input, {
  //   [styles.show]: searchMode,
  // });
  // return (
  //   <div
  //     className={classNames(className, styles.headerSearch)}
  //     onClick={() => {
  //       setSearchMode(true);
  //       if (searchMode && inputRef.current) {
  //         inputRef.current.focus();
  //       }
  //     }}
  //     onTransitionEnd={({ propertyName }) => {
  //       if (propertyName === 'width' && !searchMode) {
  //         if (onVisibleChange) {
  //           onVisibleChange(searchMode);
  //         }
  //       }
  //     }}
  //   >
  //     <SearchOutlined
  //       key="Icon"
  //       style={{
  //         cursor: 'pointer',
  //       }}
  //     />
  //     <AutoComplete
  //       key="AutoComplete"
  //       className={inputClass}
  //       value={value}
  //       options={restProps.options}
  //       onChange={(completeValue) => setValue(completeValue)}
  //     >
  //       <Input
  //         size="small"
  //         ref={inputRef}
  //         defaultValue={defaultValue}
  //         aria-label={placeholder}
  //         placeholder={placeholder}
  //         onKeyDown={(e) => {
  //           if (e.key === 'Enter') {
  //             if (restProps.onSearch) {
  //               restProps.onSearch(value);
  //             }
  //           }
  //         }}
  //         onBlur={() => {
  //           setSearchMode(false);
  //         }}
  //       />
  //     </AutoComplete>
  //   </div>
  // );
  return <></>;
};

export default HeaderSearch;
