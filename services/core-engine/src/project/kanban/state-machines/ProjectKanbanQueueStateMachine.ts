export type ProjectKanbanQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanQueueStateMachine {
  private allowedTransitions: Record<ProjectKanbanQueueState, ProjectKanbanQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanQueueState, to: ProjectKanbanQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanQueueState, to: ProjectKanbanQueueState): ProjectKanbanQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanQueue: " + from + " -> " + to);
    }
    return to;
  }
}
