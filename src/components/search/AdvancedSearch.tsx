/*
Copyright 2023 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { ComponentProps, forwardRef } from "react";
import { Field, Label } from "@vector-im/compound-web";
import SearchIcon from "@vector-im/compound-design-tokens/assets/web/icons/search";
import UserIcon from "@vector-im/compound-design-tokens/assets/web/icons/user";

// import styles from "./AdvancedSearch.module";
import { useId } from "../../utils/useId";

type SearchProps = {
  /**
   * The CSS class name
   */
  className?: string;
  /**
   * The input placeholder.
   * @default "Search…"
   */
  placeholder?: string;
  /**
   * The field name.
   */
  name: React.ComponentProps<typeof Field>["name"];

  onUserIconClick: React.MouseEventHandler
} & Omit<ComponentProps<"input">, "id" | "type">;

/**
 * A standalone search component
 */
export const AdvancedSearch = forwardRef<HTMLInputElement, SearchProps>(function Search(
  {
    className,
    onChange,
    onUserIconClick,
    // TODO: i18n needs to be setup
    placeholder = "Search…",
    name,
    ...props
  }: SearchProps,
  ref,
) {
  const id = useId();
  return (
    <Field name={name} asChild>
      <Label className="mx_AdvancedSearch" htmlFor={id}>
        <SearchIcon className="mx_AdvancedSearch__icon" width={20} height={20} />
        <input
          ref={ref}
          {...props}
          id={id}
          name={name}
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          className="mx_AdvancedSearch__input"
        />
        <UserIcon className="mx_AdvancedSearch__icon" width={20} height={20} onClick={onUserIconClick} />
      </Label>
    </Field>
  );
});
