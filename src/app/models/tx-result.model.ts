export interface ITxResult {
  hash: string;
  /** Transaction execution error code. 0 on success. */
  code?: number;
  reason?: string;
}
