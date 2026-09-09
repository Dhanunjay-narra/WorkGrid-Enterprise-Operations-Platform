export type ProjectSprintsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsMetricStateMachine {
  private allowedTransitions: Record<ProjectSprintsMetricState, ProjectSprintsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsMetricState, to: ProjectSprintsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsMetricState, to: ProjectSprintsMetricState): ProjectSprintsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
