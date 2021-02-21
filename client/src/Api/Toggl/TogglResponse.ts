export interface TogglResponse {
  readonly summary_results: TogglSummaryResultsResponse;
}

export interface TogglSummaryResultsResponse {
  readonly totals: TogglSummaryResultsTotalsResponse;
}

export interface TogglSummaryResultsTotalsResponse {
  readonly seconds: number;
}
