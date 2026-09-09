export type ProjectKanbanRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanRecordStateMachine {
  private allowedTransitions: Record<ProjectKanbanRecordState, ProjectKanbanRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanRecordState, to: ProjectKanbanRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanRecordState, to: ProjectKanbanRecordState): ProjectKanbanRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanRecord: " + from + " -> " + to);
    }
    return to;
  }
}
