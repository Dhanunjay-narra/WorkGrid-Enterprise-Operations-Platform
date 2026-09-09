export type ProjectEpicsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsScheduleStateMachine {
  private allowedTransitions: Record<ProjectEpicsScheduleState, ProjectEpicsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsScheduleState, to: ProjectEpicsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsScheduleState, to: ProjectEpicsScheduleState): ProjectEpicsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
