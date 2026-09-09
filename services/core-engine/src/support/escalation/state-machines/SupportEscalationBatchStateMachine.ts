export type SupportEscalationBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationBatchStateMachine {
  private allowedTransitions: Record<SupportEscalationBatchState, SupportEscalationBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationBatchState, to: SupportEscalationBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationBatchState, to: SupportEscalationBatchState): SupportEscalationBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationBatch: " + from + " -> " + to);
    }
    return to;
  }
}
