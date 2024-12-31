export interface SingleProblem {
    id: number;
    problemName: string;
    eulerProjectURL: string;
    problemDescription: string;
    problemDataString: string;
    problemAnswer: number | undefined;
    problemDiscussionURL: string;
    formStyle: SolverFormStyle;
}

export enum SolverFormStyle {
    MaxLimit = 'form-maxLimit',
    MinAndMaxLimits = 'form-minAndMaxLimit',
    TextFieldDataInput = 'form-textFieldDataInput',
}
