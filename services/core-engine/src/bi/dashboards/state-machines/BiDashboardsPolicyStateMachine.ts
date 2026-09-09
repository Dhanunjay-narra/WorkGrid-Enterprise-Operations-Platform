export type BiDashboardsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsPolicyStateMachine {
  private allowedTransitions: Record<BiDashboardsPolicyState, BiDashboardsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsPolicyState, to: BiDashboardsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsPolicyState, to: BiDashboardsPolicyState): BiDashboardsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
