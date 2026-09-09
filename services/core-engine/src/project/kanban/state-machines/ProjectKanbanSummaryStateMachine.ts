export type ProjectKanbanSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanSummaryStateMachine {
  private allowedTransitions: Record<ProjectKanbanSummaryState, ProjectKanbanSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanSummaryState, to: ProjectKanbanSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanSummaryState, to: ProjectKanbanSummaryState): ProjectKanbanSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanSummary: " + from + " -> " + to);
    }
    return to;
  }
}
