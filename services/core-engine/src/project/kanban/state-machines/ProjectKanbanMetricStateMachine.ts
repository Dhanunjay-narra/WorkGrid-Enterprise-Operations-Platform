export type ProjectKanbanMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanMetricStateMachine {
  private allowedTransitions: Record<ProjectKanbanMetricState, ProjectKanbanMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanMetricState, to: ProjectKanbanMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanMetricState, to: ProjectKanbanMetricState): ProjectKanbanMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanMetric: " + from + " -> " + to);
    }
    return to;
  }
}
