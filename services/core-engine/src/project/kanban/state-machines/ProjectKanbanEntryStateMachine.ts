export type ProjectKanbanEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanEntryStateMachine {
  private allowedTransitions: Record<ProjectKanbanEntryState, ProjectKanbanEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanEntryState, to: ProjectKanbanEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanEntryState, to: ProjectKanbanEntryState): ProjectKanbanEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanEntry: " + from + " -> " + to);
    }
    return to;
  }
}
