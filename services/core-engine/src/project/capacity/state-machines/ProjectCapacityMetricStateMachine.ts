export type ProjectCapacityMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityMetricStateMachine {
  private allowedTransitions: Record<ProjectCapacityMetricState, ProjectCapacityMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityMetricState, to: ProjectCapacityMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityMetricState, to: ProjectCapacityMetricState): ProjectCapacityMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityMetric: " + from + " -> " + to);
    }
    return to;
  }
}
