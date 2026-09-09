export type ProjectKanbanPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanPolicyStateMachine {
  private allowedTransitions: Record<ProjectKanbanPolicyState, ProjectKanbanPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanPolicyState, to: ProjectKanbanPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanPolicyState, to: ProjectKanbanPolicyState): ProjectKanbanPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
