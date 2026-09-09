export type ProjectKanbanScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanScheduleStateMachine {
  private allowedTransitions: Record<ProjectKanbanScheduleState, ProjectKanbanScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanScheduleState, to: ProjectKanbanScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanScheduleState, to: ProjectKanbanScheduleState): ProjectKanbanScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
