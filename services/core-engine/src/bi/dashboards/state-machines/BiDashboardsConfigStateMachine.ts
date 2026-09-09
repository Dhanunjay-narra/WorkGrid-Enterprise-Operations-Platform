export type BiDashboardsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsConfigStateMachine {
  private allowedTransitions: Record<BiDashboardsConfigState, BiDashboardsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsConfigState, to: BiDashboardsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsConfigState, to: BiDashboardsConfigState): BiDashboardsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
