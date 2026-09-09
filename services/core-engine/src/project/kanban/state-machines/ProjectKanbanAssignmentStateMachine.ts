export type ProjectKanbanAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanAssignmentStateMachine {
  private allowedTransitions: Record<ProjectKanbanAssignmentState, ProjectKanbanAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanAssignmentState, to: ProjectKanbanAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanAssignmentState, to: ProjectKanbanAssignmentState): ProjectKanbanAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
