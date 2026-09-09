export type ObsDashboardsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsPolicyStateMachine {
  private allowedTransitions: Record<ObsDashboardsPolicyState, ObsDashboardsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsPolicyState, to: ObsDashboardsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsPolicyState, to: ObsDashboardsPolicyState): ObsDashboardsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
