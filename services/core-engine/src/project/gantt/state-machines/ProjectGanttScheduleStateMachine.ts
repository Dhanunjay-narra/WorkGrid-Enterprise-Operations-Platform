export type ProjectGanttScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttScheduleStateMachine {
  private allowedTransitions: Record<ProjectGanttScheduleState, ProjectGanttScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttScheduleState, to: ProjectGanttScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttScheduleState, to: ProjectGanttScheduleState): ProjectGanttScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
