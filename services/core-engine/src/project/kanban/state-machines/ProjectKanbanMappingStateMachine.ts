export type ProjectKanbanMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanMappingStateMachine {
  private allowedTransitions: Record<ProjectKanbanMappingState, ProjectKanbanMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanMappingState, to: ProjectKanbanMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanMappingState, to: ProjectKanbanMappingState): ProjectKanbanMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanMapping: " + from + " -> " + to);
    }
    return to;
  }
}
