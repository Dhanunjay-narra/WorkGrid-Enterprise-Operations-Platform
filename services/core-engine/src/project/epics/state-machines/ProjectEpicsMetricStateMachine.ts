export type ProjectEpicsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsMetricStateMachine {
  private allowedTransitions: Record<ProjectEpicsMetricState, ProjectEpicsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsMetricState, to: ProjectEpicsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsMetricState, to: ProjectEpicsMetricState): ProjectEpicsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
