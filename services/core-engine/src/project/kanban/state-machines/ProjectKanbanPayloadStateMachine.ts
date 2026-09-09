export type ProjectKanbanPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanPayloadStateMachine {
  private allowedTransitions: Record<ProjectKanbanPayloadState, ProjectKanbanPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanPayloadState, to: ProjectKanbanPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanPayloadState, to: ProjectKanbanPayloadState): ProjectKanbanPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanPayload: " + from + " -> " + to);
    }
    return to;
  }
}
