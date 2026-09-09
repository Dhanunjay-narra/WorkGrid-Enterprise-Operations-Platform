export type BiKpisBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisBatchStateMachine {
  private allowedTransitions: Record<BiKpisBatchState, BiKpisBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisBatchState, to: BiKpisBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisBatchState, to: BiKpisBatchState): BiKpisBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisBatch: " + from + " -> " + to);
    }
    return to;
  }
}
