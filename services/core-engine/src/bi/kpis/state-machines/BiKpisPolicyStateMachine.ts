export type BiKpisPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisPolicyStateMachine {
  private allowedTransitions: Record<BiKpisPolicyState, BiKpisPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisPolicyState, to: BiKpisPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisPolicyState, to: BiKpisPolicyState): BiKpisPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
