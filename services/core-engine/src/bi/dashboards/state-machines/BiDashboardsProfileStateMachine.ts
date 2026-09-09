export type BiDashboardsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsProfileStateMachine {
  private allowedTransitions: Record<BiDashboardsProfileState, BiDashboardsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsProfileState, to: BiDashboardsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsProfileState, to: BiDashboardsProfileState): BiDashboardsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
