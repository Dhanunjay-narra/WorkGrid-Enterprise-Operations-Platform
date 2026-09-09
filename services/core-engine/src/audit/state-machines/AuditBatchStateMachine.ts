export type AuditBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditBatchStateMachine {
  private allowedTransitions: Record<AuditBatchState, AuditBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditBatchState, to: AuditBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditBatchState, to: AuditBatchState): AuditBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditBatch: " + from + " -> " + to);
    }
    return to;
  }
}
