export type ObsMetricsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsAssignmentStateMachine {
  private allowedTransitions: Record<ObsMetricsAssignmentState, ObsMetricsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsAssignmentState, to: ObsMetricsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsAssignmentState, to: ObsMetricsAssignmentState): ObsMetricsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
