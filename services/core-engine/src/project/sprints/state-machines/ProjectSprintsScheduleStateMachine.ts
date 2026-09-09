export type ProjectSprintsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsScheduleStateMachine {
  private allowedTransitions: Record<ProjectSprintsScheduleState, ProjectSprintsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsScheduleState, to: ProjectSprintsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsScheduleState, to: ProjectSprintsScheduleState): ProjectSprintsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
