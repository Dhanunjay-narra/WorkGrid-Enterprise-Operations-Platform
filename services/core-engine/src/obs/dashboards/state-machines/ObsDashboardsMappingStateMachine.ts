export type ObsDashboardsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsMappingStateMachine {
  private allowedTransitions: Record<ObsDashboardsMappingState, ObsDashboardsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsMappingState, to: ObsDashboardsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsMappingState, to: ObsDashboardsMappingState): ObsDashboardsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
