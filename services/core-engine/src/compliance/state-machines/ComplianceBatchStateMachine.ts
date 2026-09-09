export type ComplianceBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceBatchStateMachine {
  private allowedTransitions: Record<ComplianceBatchState, ComplianceBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceBatchState, to: ComplianceBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceBatchState, to: ComplianceBatchState): ComplianceBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceBatch: " + from + " -> " + to);
    }
    return to;
  }
}
