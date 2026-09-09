export type ProjectTasksMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksMetricStateMachine {
  private allowedTransitions: Record<ProjectTasksMetricState, ProjectTasksMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksMetricState, to: ProjectTasksMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksMetricState, to: ProjectTasksMetricState): ProjectTasksMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksMetric: " + from + " -> " + to);
    }
    return to;
  }
}
