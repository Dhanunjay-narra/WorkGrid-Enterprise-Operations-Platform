export type ProjectRisksMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksMetricStateMachine {
  private allowedTransitions: Record<ProjectRisksMetricState, ProjectRisksMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksMetricState, to: ProjectRisksMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksMetricState, to: ProjectRisksMetricState): ProjectRisksMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksMetric: " + from + " -> " + to);
    }
    return to;
  }
}
