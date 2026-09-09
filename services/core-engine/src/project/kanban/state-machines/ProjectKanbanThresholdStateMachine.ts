export type ProjectKanbanThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanThresholdStateMachine {
  private allowedTransitions: Record<ProjectKanbanThresholdState, ProjectKanbanThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanThresholdState, to: ProjectKanbanThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanThresholdState, to: ProjectKanbanThresholdState): ProjectKanbanThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
