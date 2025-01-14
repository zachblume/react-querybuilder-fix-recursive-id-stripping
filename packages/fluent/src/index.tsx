import {
  CancelIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DuplicateRowIcon,
  GripperDotsVerticalIcon,
  LockIcon,
  UnlockIcon,
} from '@fluentui/react-icons-mdl2';
import * as React from 'react';
import type { Controls, Field, Translations } from 'react-querybuilder';
import { getCompatContextProvider } from 'react-querybuilder';
import { FluentActionElement } from './FluentActionElement';
import { FluentDragHandle } from './FluentDragHandle';
import { FluentNotToggle } from './FluentNotToggle';
import { FluentValueEditor } from './FluentValueEditor';
import { FluentValueSelector } from './FluentValueSelector';

export * from './FluentActionElement';
export * from './FluentDragHandle';
export * from './FluentNotToggle';
export * from './FluentValueEditor';
export * from './FluentValueSelector';

export const fluentControlElements = {
  actionElement: FluentActionElement,
  dragHandle: FluentDragHandle,
  notToggle: FluentNotToggle,
  valueEditor: FluentValueEditor,
  valueSelector: FluentValueSelector,
} satisfies Partial<Controls<Field, string>>;

export const fluentTranslations = {
  removeGroup: { label: <CancelIcon /> },
  removeRule: { label: <CancelIcon /> },
  cloneRule: { label: <DuplicateRowIcon /> },
  cloneRuleGroup: { label: <DuplicateRowIcon /> },
  dragHandle: { label: <GripperDotsVerticalIcon /> },
  lockGroup: { label: <UnlockIcon /> },
  lockRule: { label: <UnlockIcon /> },
  lockGroupDisabled: { label: <LockIcon /> },
  lockRuleDisabled: { label: <LockIcon /> },
  shiftActionDown: { label: <ChevronDownIcon /> },
  shiftActionUp: { label: <ChevronUpIcon /> },
} satisfies Partial<Translations>;

export const QueryBuilderFluent = getCompatContextProvider({
  key: 'fluent',
  controlElements: fluentControlElements,
  translations: fluentTranslations,
});
